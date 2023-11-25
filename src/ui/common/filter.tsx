import { h } from "preact";
import { Dispatch, Reducer, useContext, useMemo, useReducer, useState } from "preact/hooks";
import { useStableCallback } from "ui/hooks";
import { DATACORE_CONTEXT } from "ui/markdown";
import { QUERY } from "expression/parser";
import { Indexable } from "index/types/indexable";
import { Result, Success } from "api/result";
import { SearchResult } from "index/datastore";
import { Datacore } from "index/datacore";

export type UpdateFn<T> = (val: T) => unknown;

export interface FilterState<T> {
  allItems: T[];
  filter: string;
  filteredItems: T[];
}

export type FilterAction<T> =
  | {
      type: "filter-update";
      newFilter: string;
      items: T[];
    }
  | {
      type: "filter-clear";
    };

export interface FilterProps<T> {
  filter: string;
  initialItems: T[];
}

export function filterReducer<T>(state: FilterState<T>, action: FilterAction<T>): FilterState<T> {
  switch (action.type) {
    case "filter-clear": {
      return {
        ...state,
        filteredItems: state.allItems,
      };
    }
    case "filter-update": {
      return {
        ...state,
        filteredItems: action.items,
      };
    }
  }
  console.warn(`datacore: Encountered unrecognized table operation: ${action}`);
  return state;
}

export function useInput({
  init,
  enter,
}: {
  init?: string;
  update?: UpdateFn<string>;
  enter?: (arg: string) => unknown;
}) {
  const [value, setValue] = useState(init ?? "");
  const input = (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter" && !!enter) {
          enter(value);
        }
      }}
    />
  );
  return [value, input];
}

export function Filter<T>(props: {
  initialFilter?: string;
  dispatch: Dispatch<FilterAction<T>>;
  state: FilterState<T>;
}) {
  const core = useContext(DATACORE_CONTEXT);

  const enter = useStableCallback((e: string) => {
    if (!e) return props.dispatch({ type: "filter-clear" });
    let loc: Result<SearchResult<Indexable>, string>;
    try {
      loc = core.datastore.search(QUERY.query.tryParse(e));
    } catch (_) {
      // i dunno how i should implement the "catch-all", so here's something temporary
      let expr = QUERY.query.parse(`any($infields, (v) => contains(v.value, ${JSON.stringify(e)}))`);
      if (!expr.status) {
        return props.dispatch({ type: "filter-clear" });
      }
      loc = core.datastore.search(expr.value);
    }
    let stt: T[] = [];
    if (loc.successful) {
      stt = (loc.value.results as T[]).filter((a) => props.state.allItems.contains(a));
    }
    props.dispatch({ type: "filter-update", newFilter: e, items: stt });
  }, []);

  const [, input] = useInput({
    init: props.initialFilter,
    enter,
  });
  return (
    <div>
      <div className="search-input-container">{input}</div>
    </div>
  );
}

export function useFilter<T>(props: FilterProps<T> & { core: Datacore }) {
  let loc = props.core.datastore.search(QUERY.query.tryParse(props.filter));
  if (!loc.successful) return [];
  return useMemo(() => {
    return ((loc as Success<SearchResult<Indexable>, string>).value.results as T[]).filter((a) =>
      props.initialItems.contains(a)
    );
  }, [loc.value.results]);
}
export function useFilterDispatch<T>(
  initial: FilterState<T> | (() => FilterState<T>)
): [FilterState<T>, Dispatch<FilterAction<T>>] {
  const init = useMemo(() => (typeof initial == "function" ? initial() : initial), []);
  return useReducer(filterReducer as Reducer<FilterState<T>, FilterAction<T>>, init);
}
