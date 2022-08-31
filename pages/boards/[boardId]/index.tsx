import { useRouter } from "next/router";

export default function testDetailPage() {
    const router = useRouter()

    return (
        <>
            <div>안녕하세요!! 상세페이지입니다. id는 { router.query.boardId } 입니다!!</div>
        </>
    )
}