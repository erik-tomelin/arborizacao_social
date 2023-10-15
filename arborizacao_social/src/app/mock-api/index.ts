import { ActivitiesMockApi } from 'app/mock-api/pages/activities/api';
import { AnalyticsMockApi } from 'app/mock-api/dashboards/analytics/api';
import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { CryptoMockApi } from 'app/mock-api/dashboards/crypto/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';
import { UserMockApi } from 'app/mock-api/common/user/api';

export const mockApiServices = [
    ActivitiesMockApi,
    AnalyticsMockApi,
    AuthMockApi,
    CryptoMockApi,
    FinanceMockApi,
    IconsMockApi,
    ProjectMockApi,
    UserMockApi
];
