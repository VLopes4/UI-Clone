import { ReactNode, RefObject } from "react";

export interface Car {
    modelName: string
    overlayNode: ReactNode
    sectionRef: RefObject<HTMLElement>
}