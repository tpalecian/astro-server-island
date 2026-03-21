import type { StudioBySlugQuery, ThinkingBySlugQuery, WorkBySlugQuery } from '@rotate/cms'

type WorkBlock = NonNullable<WorkBySlugQuery['work']>['content'][number]
type ThinkingBlock = NonNullable<ThinkingBySlugQuery['thinking']>['content'][number]
type StudioBlock = NonNullable<StudioBySlugQuery['studio']>['content'][number]

/** Union of modular `content` items returned by `getPageBySlug` (work / thinking / studio). */
export type PageContentBlock = WorkBlock | ThinkingBlock | StudioBlock

/** Shared props for every `*-block-container` that renders one CMS block. */
export type BlockContainerProps = {
	block: PageContentBlock
}

/** Props for `content-blocks-container` (ordered list of blocks). */
export type ContentBlocksContainerProps = {
	blocks?: PageContentBlock[] | null
}
