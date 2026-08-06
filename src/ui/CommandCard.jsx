import React from "react";
import Card from "./Card";

export default function CommandCard({ command }) {

    return (

        <Card className="p-4 hover:border-indigo-500 transition">

            <div className="flex items-center justify-between">

                <code className="text-indigo-400 font-semibold">
                    {command}
                </code>

                <span className="text-gray-500">
                    /
                </span>

            </div>

        </Card>

    );

}