'use client'
import Loader from "@/app/components/loader/loader";
import Modal from "@/app/components/modal/modal";
import {useMyContext} from "@/app/services/context";



export default function CardPage() {
    const {state, dispatch} = useMyContext()


    return(
        <div>
            {state.products.length}
        </div>
    )
}