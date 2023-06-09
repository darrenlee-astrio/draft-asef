import { useApi } from '../apis/useApi.js'
let { post } = useApi();

const url = 'https://jybefcn3frdini3rmswhbx6gni.appsync-api.ap-southeast-2.amazonaws.com/graphql';
const apiKey = 'da2-tefnw3t5jbdm3b5y5lvvn7ihty'
const additionalHeaders = {
    'Tenant-Id': 'aStar'
};

export function usePpmsApi() {
    async function trends(limitCount) {
        return query(JSON.stringify({
            query: `
            query {
            trends(limit: ${limitCount}) {
                searchTerm
                numberOfResults
                __typename
            }
            }
        `
        }));
    }

    async function getTenantConfig() {
        return query(JSON.stringify({
            query: `
            query {
            getTenantConfig {
                feedback {
                        comment
                        __typename
                    }
                enquiry {
                        comment
                        email
                        firstName
                        lastName
                        organisation
                        phone
                        userType
                        __typename
                    }
                programs {
                        enabled
                        ncrisInTopNav
                        ncrisInHomePage
                        inSearchResults
                        inFacilityPage
                        __typename
                    }
                static_page {
                        enabled
                        __typename
                    }
                    __typename
                }
            }
        `
        }));
    }

    async function facility(id) {
        return query(JSON.stringify({
            query: `
            query Facility($id: String){
            facility(id: $id) {
                facility {
                        description
                        id
                        externalId
                        location
                        title
                services {
                            description
                            id
                            title
                    alternatives {
                                property
                                value
                                id
                                __typename
                            }
                            __typename
                        }
                equipment {
                            description
                            id
                            title
                            images
                    alternatives {
                                property
                                value
                                id
                                __typename
                            }
                            __typename
                        }
                contacts {
                            id
                            email
                            firstName
                            lastName
                            phone
                            location
                            role
                            __typename
                        }
                        __typename
                    }
                institution {
                        id
                        name
                        __typename
                    }
                program {
                        id
                        name
                        logo
                        summary
                description {
                            title
                            body
                            __typename
                        }
                        __typename
                    }
                programType {
                        id
                        name
                        logo
                        __typename
                    }
                    relationshipType
                    __typename
                }
            }
        `,
            variables: {
                id: id
            }
        }));
    }

    async function allFacilities() {
        return query(JSON.stringify({
            query: `
            query {
            allFacilities {
                facility {
                        title
                        location
                        id
                        __typename
                    }
                institution {
                        id
                        name
                        location
                        __typename
                    }
                    __typename
                }
            }
        `
        }));
    }

    async function getSummary() {
        return query(JSON.stringify({
            query: `
            query {
            getSummary {
                    id
                    name
                    facilitiesCount
                    equipmentCount
                    servicesCount
                    __typename
                }
            }
        `
        }));
    }

    async function query(data) {
        return await post(url, data, apiKey, additionalHeaders);
    }

    return {
        trends,
        getTenantConfig,
        facility,
        allFacilities,
        getSummary,
        query
    };
}
