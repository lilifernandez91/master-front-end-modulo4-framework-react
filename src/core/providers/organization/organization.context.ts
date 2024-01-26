import React from "react";
import { Organization } from "./organization.vm";

interface OrgContext extends Organization {
    setOrganization: (value: string) => void;
}

export interface OrganizationProviderProps {
    children: React.ReactNode;
}

export const OrganizationContext = React.createContext<OrgContext>({
    organization: '',
    setOrganization: (value: string) => { }
});