export interface ILayoutHeaderUIProps {
    menuVisible: boolean
    onClickOpenMenu: () => void
    onClickCloseMenu: (event: any) => Promise<void>
}