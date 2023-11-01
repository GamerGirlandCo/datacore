import { h } from "preact";
import { SETTINGS_CONTEXT } from "./markdown";
import { Dispatch, useContext, useMemo } from "preact/hooks";
import Paginator from "react-paginate";
import { useStableCallback } from "./hooks";
import { TableColumn } from "./table";

export const PAGE_LEFT_SVG = (
    <svg
        className="datacore-pager previous"
        aria-label="previous"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
    >
        <path d="M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm71-241L239 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L135 273c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
);

export const PAGE_RIGHT_SVG = (
    <svg className="datacore-pager next" aria-label="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM313 273L209 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L313 239c9.4 9.4 9.4 24.6 0 33.9z" />
    </svg>
);

export interface PagerProps {
    /** current page */
    page?: number;

    /** page size */
    pageSize?: number;

    /** whether paging is enabled */
    enabled?: boolean;
}

export type PagerFuncProps<T, A> = PagerProps & {
	data: T[]; 
	dispatch: Dispatch<A>, 
	columns?: TableColumn<T>[]
}

export function Pager<T, A>(props: PagerFuncProps<T, A>) {
    const settings = useContext(SETTINGS_CONTEXT);
    const pageSize = useMemo(() => {
        if (props.pageSize === undefined) {
            if (settings.defaultPagingEnabled) return settings.defaultPageSize;
            else return undefined;
        } else if (props.enabled == false) return undefined;
        else if (props.enabled == true) return settings.defaultPageSize;
        else return props.pageSize
    }, [settings.defaultPageSize, settings.defaultPagingEnabled, props.pageSize]);
    const pageCount = useMemo(() => Math.ceil(props.data.length / (pageSize ?? props.data.length)), [props.data]);

    const pageChange = useStableCallback(
        (event: any) => {
            props.dispatch({ type: "paging", newPage: event.selected } as A);
            props.page = event.selected;
        },
        [props.page, props.columns, props.data]
    );
		return <Paginator 
			breakLabel="..." 
			nextLabel={PAGE_RIGHT_SVG} 
			previousLabel={PAGE_LEFT_SVG}
			onPageChange={pageChange}
			pageCount={pageCount}
			containerClassName="datacore-pager"
		
		/>
}
