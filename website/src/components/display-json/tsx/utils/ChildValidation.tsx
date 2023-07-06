import { ReactNode } from "react";

export function MinChildren(children: ReactNode, count: number): JSX.Element[] {
    const childArray = ToChildArray(children);
    if(childArray.length < count) throw new Error(`Invalid child array given, expected at least ${count} children but got ${children}`);
    return childArray;
}

export function ExactChildren(children: ReactNode, count: number): JSX.Element[] {
    const childArray = ToChildArray(children);
    if(childArray.length !== count) throw new Error(`Invalid child array given, expected ${count} children but got ${children}`);
    return childArray;
}

export function ToChildArray(children: ReactNode): JSX.Element[] {
    const childArray = (!Array.isArray(children) ? [children]  : children) as JSX.Element[]
    return childArray;
}