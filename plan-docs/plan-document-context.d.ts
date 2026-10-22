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
  terminationDate: string | null;
  status: "draft" | "adopted" | "amended" | "terminated" | "retired";
  participantSummary: string;
  fundingDescription: string;
}

export interface PlanDocumentContext {
  $schema?: string;
  schemaVersion: "1.3.0";
  sponsor: {
    id?: string;
    legalName: string;
    ein: string;
    address: Address;
    participatingEmployers: Array<{
      id: string;
      legalName: string;
      ein?: string;
      effectiveDate: string;
      terminationDate: string | null;
      status: "active" | "terminated";
    }>;
  };
  plan: {
    id: string;
    name: string;
    erisaPlanNumber: string;
    originalEffectiveDate: string;
    effectiveDate: string;
    year: { startDate: string; endDate: string };
    document: {
      id: string;
      version: string;
      status: "draft" | "adopted" | "amended" | "terminated" | "retired";
      owner: string;
    };
  };
  administration: {
    planAdministrator: Party;
    agentForServiceOfProcess: Party;
    namedFiduciary: Party;
    serviceContacts: {
      eligibility: Contact;
      claims: Contact;
      appeals: Contact;
      providerNavigation: Contact;
      continuation: Contact;
      privacy: Contact;
    };
    materialServiceProviders: Array<{
      name: string;
      function: string;
      contact: Contact;
    }>;
  };
  eligibility: {
    defaultClass: { id: string; description: string };
    defaultWaitingPeriod: { description: string };
    enrollmentProcedure: string;
    coverageTermination: string;
    rehireRule: string;
    leaveRule: string;
  };
  cafeteriaPlan: {
    isEstablished: boolean;
    documentId: string;
    electionPeriod: string;
    midyearElectionProcedure: string;
  };
  enrollmentSchedule: {
    documentId: string;
    name: string;
    description: string;
    deliveryMethod: string;
  };
  benefits: BenefitReference[];
  spd: {
    documentId: string;
    version: string;
    issueDate: string;
    audience: string;
    howToUse: string;
    statementOfErisaRightsApplies: boolean;
  };
  adoption: {
    method: "platform" | "written-instrument" | "resolution" | "other";
    recordId?: string;
    acceptedAt?: string;
    acceptedBy?: { userId?: string; name?: string; title?: string };
  };
  extensions: Record<string, Record<string, unknown>>;
  custom?: Record<string, unknown>;
}
