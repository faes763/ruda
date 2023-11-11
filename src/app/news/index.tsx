'use client'
import { useArticle } from "@/store/useArticle";
import News from "./news"
import PopupArticle from "./popup/popup-article"

export default function DashboardNews() {
  const {isOpen} = useArticle();
  return(
    <>
        <News/>
        {isOpen && <PopupArticle/>}
    </>
        
    )
}