import { Link } from "expression/link";
import { Datacore } from "index/datacore";
import { SearchResult } from "index/datastore";
import { QUERY } from "expression/parser";
import { IndexQuery } from "index/types/index-query";
import { Indexable } from "index/types/indexable";
import { MarkdownPage } from "index/types/markdown/markdown";
import { Result } from "./result";
import { Component, MarkdownPostProcessorContext, MarkdownRenderChild } from "obsidian";
import { DatacoreJSRenderer } from "ui/javascript";
import { DatacoreLocalApi } from "./local-api";

/** Exterally visible API for datacore. */
export class DatacoreApi {
    public constructor(public core: Datacore) {}

    /////////////////////////
    // Querying + Fetching //
    /////////////////////////

    /** Load a markdown file by full path or link. */
    public page(path: string | Link): MarkdownPage | undefined {
        const realPath = path instanceof Link ? path.path : path;

        return this.core.datastore.load(realPath) as MarkdownPage | undefined;
    }

    /** Resolve a local or absolute path or link to an absolute path. */
    public resolvePath(path: string | Link, sourcePath?: string): string {
        const rawpath = path instanceof Link ? path.path : path;
        if (rawpath.startsWith("/")) return rawpath.substring(1);

        const absolute = this.core.metadataCache.getFirstLinkpathDest(rawpath, sourcePath ?? "");
        if (absolute) return absolute.path;

        return rawpath;
    }

    /** Execute a textual or typed index query, returning all results. */
    public query(query: string | IndexQuery): Indexable[] {
        return this.tryQuery(query).orElseThrow();
    }

    /** Execute a textual or typed index query, returning all results. */
    public tryQuery(query: string | IndexQuery): Result<Indexable[], string> {
        return this.tryFullQuery(query).map((result) => result.results);
    }

    /** Execute a textual or typed index query, returning results plus performance metadata. */
    public fullquery(query: string | IndexQuery): SearchResult<Indexable> {
        return this.tryFullQuery(query).orElseThrow();
    }

    /** Execute a textual or typed index query, returning results plus performance metadata. */
    public tryFullQuery(query: string | IndexQuery): Result<SearchResult<Indexable>, string> {
        const parsedQuery = typeof query === "string" ? QUERY.query.tryParse(query) : query;
        return this.core.datastore.search(parsedQuery);
    }

    /////////////////////
    // Visual Elements //
    /////////////////////

    /**
     * Run the given DatacoreJS script, rendering it into the given container. This function
     * will return quickly; actual rendering is done asynchronously in the background.
     *
     * Returns a markdown render child representing the rendered object.
     */
    public executeJs(
        source: string,
        container: HTMLElement,
        component: Component | MarkdownPostProcessorContext,
        sourcePath: string
    ): MarkdownRenderChild {
        return this._renderJavascript(source, container, component, sourcePath, "js");
    }

    /**
     * Similar to `executeJs`, but for JSX scripts. If you are unsure if your input will be JS
     * or JSX, use this one, as it also supports regular javascript (albeit at at a mild performance
     * hit to rendering).
     */
    public executeJsx(
        source: string,
        container: HTMLElement,
        component: Component | MarkdownPostProcessorContext,
        sourcePath: string
    ): MarkdownRenderChild {
        return this._renderJavascript(source, container, component, sourcePath, "jsx");
    }

    /**
     * Similar to `executeJs`, but for TypeScript scripts. Use the TSX variant for TSX supprot.
     */
    public executeTs(
        source: string,
        container: HTMLElement,
        component: Component | MarkdownPostProcessorContext,
        sourcePath: string
    ): MarkdownRenderChild {
        return this._renderJavascript(source, container, component, sourcePath, "ts");
    }

    /**
     * Similar to `executeTs`, but for TSX scripts. If you are unsure if your input will be TS
     * or TSX, use this one, as it also supports regular javascript (albeit at at a mild performance
     * hit to rendering).
     *
     * This generally will also work if you are unsure if your input is javascript or typescript,
     * though beware there are a few niche cases where javascript and typescript diverge in syntax.
     */
    public executeTsx(
        source: string,
        container: HTMLElement,
        component: Component | MarkdownPostProcessorContext,
        sourcePath: string
    ): MarkdownRenderChild {
        return this._renderJavascript(source, container, component, sourcePath, "tsx");
    }

    /** Shared logic for rendering any JS/TS script. */
    private _renderJavascript(
        source: string,
        container: HTMLElement,
        component: Component | MarkdownPostProcessorContext,
        sourcePath: string,
        language: "js" | "ts" | "jsx" | "tsx"
    ) {
        let local = new DatacoreLocalApi(this, sourcePath);
        const renderer = new DatacoreJSRenderer(local, container, sourcePath, source, language);
        component.addChild(renderer);

        return renderer;
    }
}
