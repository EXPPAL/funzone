import React, { ReactNode, useState } from "react";

export function Tabs({ children, className, contentClass = '', titleClass='' }: {children: JSX.Element[], className: string, contentClass?: string, titleClass?: string}) {
  function findActiveTab(tabs: JSX.Element[]) {
    return tabs.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab: JSX.Element) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
	
	<ul className={" flex space-x-0 mb-5 text-center rounded-lg " + className}>
        {children.map((item, i) => {
          return (
            <React.Fragment  key={`tab-${i}`}>
              {tabValidator(item) && (
                <Tab
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  className={ titleClass }
                >
                  {item.props.title}
                </Tab>
              )}
            </React.Fragment>
          );
        })}
      </ul>
      <div className={"p-5 " + contentClass}>
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`} key={i}>
              {item.props.children}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab, className }: any) {
  return (
    <>
		<li className="w-full">
      <button draggable="false"
	  	className={`inline-block text-xs font px-4 py-3 whitespace-nowrap w-full h-full ${activeTab === currentTab ? "bg-[#c20009]" : "bg-[#0903ab]"} ${className}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </button>
	  </li>
    </>
  );
}

Tab.displayName = "Tab";
