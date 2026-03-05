import { useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { slideInFromTop } from "../animations/animations";

import { skills } from "../data/skills";

const SPEED = 50; 

const Skills = () => {
    const trackRef = useRef(null);
    const x = useMotionValue(0);
    const isDragging = useRef(false);
    const halfWidth = useRef(0);

    useEffect(() => {
        if (trackRef.current) {
        const firstSet = trackRef.current.children[0];
        if (firstSet) {
            halfWidth.current = firstSet.offsetWidth;
        }
        }
    }, []);

    const wrapX = useCallback((val) => {
        const hw = halfWidth.current;
        if (hw === 0) return val;
        let wrapped = val % hw;
        if (wrapped > 0) wrapped -= hw;
        return wrapped;
    }, []);

    useAnimationFrame((_, delta) => {
        if (isDragging.current || halfWidth.current === 0) return;
        const moveBy = -(SPEED * (delta / 1000));
        x.set(wrapX(x.get() + moveBy));
    });

    const handleDragStart = () => {
        isDragging.current = true;
    };

    const handleDragEnd = () => {
        x.set(wrapX(x.get()));
        isDragging.current = false;
    };

    return (
        <motion.div
            className="relative overflow-hidden mt-5 cursor-grab active:cursor-grabbing"
            variants={slideInFromTop(1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Left shadow overlay */}
            <div
                className="absolute left-0 top-0 bottom-0 w-20 nt-sm:w-32 z-10 pointer-events-none"
                style={{
                background: "linear-gradient(to right, #0A192F, transparent)",
                }}
            />
            {/* Right shadow overlay */}
            <div
                className="absolute right-0 top-0 bottom-0 w-20 nt-sm:w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0A192F, transparent)" }}
            />

            <motion.div
                ref={trackRef}
                className="flex w-max"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -99999, right: 99999 }}
                dragElastic={0}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center nt-lg:gap-14 gap-10 px-5">
                    {skills.map((skill) => (
                    <a href={skill.href} target="_blank" rel="noopener noreferrer">
                        <img
                            key={skill.alt}
                            src={skill.src}
                            alt={skill.alt}
                            className={`${skill.className} h-auto select-none hover:scale-120 transition-all duration-300`}
                            draggable={false}
                        />
                    </a>
                    ))}
                </div>
                ))}
            </motion.div>
        </motion.div>
  );
};

export default Skills;
