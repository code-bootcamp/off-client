import { useRouter } from "next/router";
import MainUI from "./main.presenter";
export default function MainContainer() {
    const router = useRouter()
    const onClickMoveToMarket = () => {
        router.push('/my-fridge')
    }
    return<MainUI onClickMoveToMarket={ onClickMoveToMarket } />
}