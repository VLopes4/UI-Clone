import { createContext, RefObject } from 'react'
import { Car } from '../models/car';



interface ModelsContext {
    wrapperRef: RefObject<HTMLElement>
    registeredModels: Car[]
    registerModel: (model: Car) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => Car | null
}

export default createContext<ModelsContext>({} as ModelsContext);