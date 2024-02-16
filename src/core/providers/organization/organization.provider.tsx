import React from "react";
import { OrganizationProviderProps, OrganizationContext } from './organization.context';
import { Organization, createInitialOrganization } from "./organization.vm";

export const OrganizationProvider: React.FC<OrganizationProviderProps> = (props) => {
    
    const [organization, setOrganization] = React.useState<string>(
       createInitialOrganization()
    )

    return (
        <OrganizationContext.Provider 
            value={{ organization, setOrganization }}>
            {props.children}
        </OrganizationContext.Provider>
    );
}
