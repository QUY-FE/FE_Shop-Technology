'use client'

import Link from "next/link"

export default function Sell(
    {
        hasSell = false, 
        totalSell = 0, 
        tilteSell = 'Summer Sale For All Swim Suits And Free Express Delivery' 
    }: { hasSell?: boolean , totalSell?: number , tilteSell?: string}) {
  
    return(
        <div>
        {/* Nếu isSell(Quảng Cáo) = true hiện thông báo giảm giá*/}
        {
            hasSell ? 
            (
            <div className="w-full h-[36px] bg-black">
                <p className="text-white block w-full h-full text-center leading-[36px] text-[13px]">
                {tilteSell} - OFF {totalSell}%! 
                <span className="font-bold underline ml-3">
                    <Link href='/'>
                        Shop now
                    </Link>
                </span> 
                </p>
            </div>
            ) : null
        }
        </div>
    )
}