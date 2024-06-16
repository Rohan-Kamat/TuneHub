'use client'
import Image from "next/image"
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Grid() {

    return (

    <div className="grid grid-rows-6 grid-cols-12 gap-3.5 h-[120vh] w-full">
        <motion.div
            className="opacity-10 row-start-1 lg:row-end-4 row-end-3 col-start-1 col-end-4 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ duration: 1 }}
        >
            <Image
                src={"/grid-images/grid-1.webp"}
                layout="fill"
                objectFit="cover"
                alt="picture of Ed Sheeran"
            />
        </motion.div>
        <motion.div
            className="opacity-10 lg:row-start-4 row-start-3 lg:row-end-6 row-end-4 col-start-1 col-end-4 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
                transition={{ duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-2.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of Sonu Nigam"
            />
        </motion.div>
        <motion.div
            className="opacity-10 row-start-1 row-end-3 col-start-4 xl:col-end-8 lg:col-end-9 col-end-12 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ delay: 0.2, duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-4.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of Arijit Singh"
            />
        </motion.div>
        <motion.div
            className="opacity-10 lg:row-start-1 lg:row-end-3 row-start-4 row-end-6 xl:col-start-8 xl:col-end-10 lg:col-start-9 lg:col-end-12 col-start-1 col-end-4 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-7.webp"}
            layout="fill"
            objectFit="cover"
            alt="picture of Eminem"
            />
        </motion.div>
        <motion.div
            className="opacity-10 xl:row-start-3 row-start-4 xl:row-end-6 row-end-5 xl:col-start-4 col-start-10 xl:col-end-6 col-end-12 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-6.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of Taylor Swift"
            />
        </motion.div>
        <motion.div
            className="opacity-10 row-start-3 row-end-5 xl:col-start-6 col-start-4 col-end-10 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ delay: 0.2, duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-5.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of the band Ghost"
            />
        </motion.div>
        <motion.div
            className="opacity-10 row-start-5 row-end-6 xl:col-start-6 col-start-4 xl:col-end-8 col-end-7 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ delay: 0.2, duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-3.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of El Estepario Siberiano"
            />
        </motion.div>
        <motion.div
            className="opacity-10 row-start-5 row-end-6 xl:col-start-8 col-start-7 col-end-10 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-8.png"}
            layout="fill"
            objectFit="cover"
            alt="picture of Tori Kelly"
            />
        </motion.div>
        <motion.div
            className="opacity-10 xl:row-start-1 row-start-3 row-end-4 col-start-10 col-end-12 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ delay: 0.4, duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-9.jpg"}
            layout="fill"
            objectFit="cover"
            alt="picture of BTS"
            />
        </motion.div>
        <motion.div
            className="opacity-10 xl:row-start-4  row-start-5 row-end-6 col-start-10 col-end-12 rounded-lg relative top-24 overflow-hidden"
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ margin: "100px", once: true }}
            transition={{ delay:0.2, duration: 1 }}
        
        >
            <Image
            src={"/grid-images/grid-10.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="picture of Raghu Dixit"
            />
        </motion.div>
    </div>
    );
}