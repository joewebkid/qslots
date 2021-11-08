export interface MetricIndicatorProps {
    rating?: number
    unit: string
    value: number
}

export type MetricIndicatorName = 'co2' | 'power' | 'price';

export type MetricProps = Record<MetricIndicatorName, MetricIndicatorProps>;

export type MetricName = 'economy';

export type MetricCollection = Record<MetricName, MetricProps>;
