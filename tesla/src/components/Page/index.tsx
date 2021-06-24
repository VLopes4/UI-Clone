import React from 'react';
import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';
import { Container, Spacer } from './styles';

export default function Page() {
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model S',
                        'Model Y',
                        'Model 3',
                        'Model X',
                        'Solar Panels',
                        'Solar Roof',
                        'Accessories',
                    ].map(modelName => (
                        <ModelSection
                            key={modelName}
                            className="colored"
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent 
                                    title={modelName}
                                    description="Order Online for Touchless Delivery"
                                />}
                        />
                    ))}
                </div>
                <Spacer/>
                <UniqueOverlay/>
            </ModelsWrapper>
        </Container>
    );
}