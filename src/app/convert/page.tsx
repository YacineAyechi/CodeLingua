"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

const Convert = () => {
  const [inputSelectedLanguage, setinputSelectedLanguage] = useState("default");
  const [outputSelectedLanguage, setoutputSelectedLanguage] =
    useState("default");

  const handleInputLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setinputSelectedLanguage(event.target?.value);
  };

  const handleOutputLanguageChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setoutputSelectedLanguage(event.target?.value);
  };

  return (
    <div className="mt-16 px-20 py-2">
      <h1 className="font-bold text-4xl text-center">Convert</h1>
      <div className="flex justify-around my-8">
        <div className="w-1/2 mr-2 ">
          <div className="mx-auto my-auto flex justify-center mb-14">
            <Image
              className="mr-4 mt-[-6px]"
              width={44}
              height={44}
              src={`/languages/${inputSelectedLanguage}.svg`}
              alt="Target Icon"
            />

            <select
              value={inputSelectedLanguage}
              onChange={handleInputLanguageChange}
              className="flex h-10 w-1/3 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            >
              <option disabled value="default">
                Input Language
              </option>
              <option value="c++">C++</option>
              <option value="cs">C#</option>
              <option value="c">C</option>
              <option value="javascript">Javascript</option>
              <option value="lua">Lua</option>
              <option value="pascal">Pascal</option>
              <option value="python">Python</option>
              <option value="r">R</option>
            </select>
          </div>

          <Textarea
            placeholder="Write your code here"
            id="message"
            className="h-[400px]"
          />
        </div>
        <div className="w-1/2 ml-2">
          <div className="mx-auto my-auto flex justify-center  mb-14">
            <Image
              className="mr-4 mt-[-6px]"
              width={44}
              height={44}
              src={`/languages/${outputSelectedLanguage}.svg`}
              alt="Target Icon"
            />

            <select
              value={outputSelectedLanguage}
              onChange={handleOutputLanguageChange}
              className="flex h-10 w-1/3 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            >
              <option disabled value="default">
                Output Language
              </option>
              <option value="c++">C++</option>
              <option value="cs">C#</option>
              <option value="c">C</option>
              <option value="javascript">Javascript</option>
              <option value="lua">Lua</option>
              <option value="pascal">Pascal</option>
              <option value="python">Python</option>
              <option value="r">R</option>
            </select>
          </div>

          <Textarea
            placeholder="Output Code"
            id="message"
            className="h-[400px]"
            disabled
          />
        </div>
      </div>
      <Button className="text-center flex mx-auto w-48 my-10">Convert</Button>
    </div>
  );
};

export default Convert;
