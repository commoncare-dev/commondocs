export interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  countryCode: string;
  formatted: string;
}

export interface Contact {
  email?: string;
  phone?: string;
  website?: string;
  formatted: string;
}

export interface Party {
  name: string;
  address?: Address;
  contact?: Contact;
}

export interface BenefitReference {
  id: string;
  name: string;
  documentId: string;
  version: string;
  effectiveDate: string;
  terminationDate?: string;
  status: "draft" | "adopted" | "amended" | "terminated" | "retired";
}

export interface PlanDocumentContext {
  $schema?: string;
  schemaVersion: "1.0.0";
  sponsor: {
    id?: string;
    legalName: string;
    ein: string;
    address: Address;
  };
  plan: {
    id: string;
    name: string;
    erisaPlanNumber: string;
    originalEffectiveDate: string;
    effectiveDate: string;
    year: {
      startDate: string;
      endDate: string;
    };
  };
  administration: {
    planAdministrator: Party;
    agentForServiceOfProcess: Party;
    namedFiduciary: Party;
  };
  eligibility: {
    defaultClass: {
      id: string;
      description: string;
    };
    defaultWaitingPeriod: {
      description: string;
    };
  };
  benefits: BenefitReference[];
  adoption: {
    method: "platform" | "written-instrument" | "resolution" | "other";
    recordId?: string;
    acceptedAt?: string;
    acceptedBy?: {
      userId?: string;
      name?: string;
      title?: string;
    };
  };
  extensions: Record<string, Record<string, unknown>>;
  custom?: Record<string, unknown>;
}
