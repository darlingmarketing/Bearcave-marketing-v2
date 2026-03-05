export type Pillar = 'MARKETER' | 'TECHNOLOGIST' | 'ARCHITECT' | 'BUILDER';

export interface TheChallengeSection {
    headline: string;
    strategyNarrative: string;
    metrics?: { label: string; value: string }[];
    visualPrompt: string;
}

export interface TheBlueprintSection {
    headline: string;
    architectureNarrative: string;
    systemDiagramPrompt: string;
}

export interface TheExecutionSection {
    headline: string;
    deploymentNarrative: string;
    challengesOvercome: string[];
    galleryPrompts: string[];
}

export interface TheStackSection {
    headline: string;
    infrastructureNarrative: string;
    technologies: string[];
    codeSnippetPrompt?: string;
}

export interface RelatedProjectsLinks {
    marketerSlug?: string;
    technologistSlug?: string;
    architectSlug?: string;
    builderSlug?: string;
    builderExternalUrl?: string;
}

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client?: string;
    primaryPillar: Pillar;
    heroImagePrompt: string;
    bentoSummary: string;
    sections: {
        theChallenge: TheChallengeSection;
        theBlueprint: TheBlueprintSection;
        theExecution: TheExecutionSection;
        theStack: TheStackSection;
    };
    relatedLinks: RelatedProjectsLinks;
}

export type PortfolioDataStore = Record<string, CaseStudy>;
