import React from "react";
import { useState } from "react";

import commandsData from "../data/commands";

import Tabs from "../ui/Tabs";

import CommandCard from "../ui/CommandCard";

export default function Commands() {

    const [active, setActive] = useState(commandsData[0].category);

    const current = commandsData.find(
        c => c.category === active
    );

    return (

        <section
            id="commands"
            className="py-28 px-6 max-w-7xl mx-auto"
        >

            <div className="text-center mb-16">

                <h2 className="text-5xl font-black mb-4">

                    جميع أوامر
                    <span className="text-indigo-400">
                        {" "}Equinox
                    </span>

                </h2>

                <p className="text-gray-400">

                    أكثر من 40 أمر احترافي لإدارة مجتمعك.

                </p>

            </div>

            <Tabs

                items={commandsData.map(c => c.category)}

                active={active}

                setActive={setActive}

            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                {current.commands.map(cmd => (

                    <CommandCard

                        key={cmd}

                        command={cmd}

                    />

                ))}

            </div>

        </section>

    );

}