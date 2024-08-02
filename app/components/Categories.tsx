import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <div>
            <div className="columns-5 gap-0 pt-40">
                <figure className="blog-block-content image-zoom relative">
                    <a href="#" className=" ">
                        <Image height={259.625} width={270.188} className="blog-block-img " src="/blog7.png" alt="" />
                        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
                            <h5 className="font-heading text-white text-xl p-12">5 Helpful Tips for Living Healthy Life</h5>
                        </div>
                    </a>
                </figure>
                <figure className="blog-block-content image-zoom relative">
                    <a href="#" className=" ">
                        <Image height={259.625} width={270.188} className="blog-block-img " src="/blog8.png" alt="" />
                        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
                            <h5 className="font-heading text-white text-xl p-12">5 Helpful Tips for Living Healthy Life</h5>
                        </div>
                    </a>
                </figure>
                <figure className="blog-block-content image-zoom relative">
                    <a href="#" className=" ">
                        <Image height={259.625} width={270.188} className="blog-block-img " src="/blog9.png" alt="" />
                        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
                            <h5 className="font-heading text-white text-xl p-12">5 Helpful Tips for Living Healthy Life</h5>
                        </div>
                    </a>
                </figure>
                <figure className="blog-block-content image-zoom relative">
                    <a href="#" className=" ">
                        <Image height={259.625} width={270.188} className="blog-block-img " src="/blog10.png" alt="" />
                        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
                            <h5 className="font-heading text-white text-xl p-12">5 Helpful Tips for Living Healthy Life</h5>
                        </div>
                    </a>
                </figure>
                <figure className="blog-block-content image-zoom relative">
                    <a href="#" className=" ">
                        <Image height={259.625} width={270.188} className="blog-block-img " src="/blog11.png" alt="" />
                        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
                            <h5 className="font-heading text-white text-xl p-12">5 Helpful Tips for Living Healthy Life</h5>
                        </div>
                    </a>
                </figure>
            </div>
        </div>
    )
}

export default Categories