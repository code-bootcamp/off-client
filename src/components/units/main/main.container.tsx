import { useRouter } from "next/router";
import MainUI from "./Main.presenter";
export default function MainContainer() {
    const router = useRouter()
    const onClickMoveToMarket = () => {
        router.push('/market')
    }
    return<MainUI onClickMoveToMarket={ onClickMoveToMarket } />
}