import React, { useState, useCallback, useRef } from "react";
import { Car } from "../../../models/car";
import Models from '../../../contexts/models'
import ModelOverlay from "../ModelOverlay";
import { Container, OverlaysRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [registeredModels, setRegisteredModels] = useState<Car[]>([]);

    const registerModel = useCallback((model: Car) => {
        setRegisteredModels(state => [...state, model]);
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName === modelName));
    }, [])

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(item => item.modelName === modelName) || null
    }, [registeredModels])

    return(
        <Models.Provider value={{ wrapperRef, registeredModels, registerModel, unregisterModel, getModelByName }}>
            <Container ref={wrapperRef}>
                <OverlaysRoot>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
                    ))}
                </OverlaysRoot>
                {children}
            </Container>
        </Models.Provider>
    );
}

export default ModelsWrapper;