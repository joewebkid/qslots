import { TypeStatisticLinkProps } from '@core/api';
import { ReactComponent as VerificationDone } from './verification_done.svg';
import { ReactComponent as General } from './general.svg';
import { ReactComponent as VerificationGoto } from './verification_goto.svg';
import { ReactComponent as Proctoring } from './proctoring.svg';

type IconsStatisticsProps = {
    [key in TypeStatisticLinkProps['type']]: typeof General;
};

export const IconsStatistics: IconsStatisticsProps = {
    proctoring: Proctoring,
    general: General,
    verification_goto: VerificationGoto,
    verification_done: VerificationDone,

};
