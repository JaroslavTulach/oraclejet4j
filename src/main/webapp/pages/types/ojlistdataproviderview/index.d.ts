import { DataProvider, SortCriterion, FetchByKeysParameters, ContainsKeysResults, FetchByKeysResults, FetchByOffsetParameters, FetchByOffsetResults, DataMapping, FetchListResult, FetchListParameters,
   FetchAttribute, AttributeFilter, CompoundFilter, FilterOperator } from '../ojdataprovider';
declare class ListDataProviderView<K, D, Kin, Din> implements DataProvider<K, D> {
    attributes: Array<string | FetchAttribute>;
    dataMapping: DataMapping<K, D, Kin, Din>;
    filterCriterion: AttributeFilter<D> | CompoundFilter<D> | FilterOperator<D>;
    from: Kin;
    offset: number;
    sortCriteria: Array<SortCriterion<D>>;
    constructor(dataProvider: DataProvider<K, D>, options?: {
        from?: Kin;
        offset?: number;
        sortCriteria?: Array<SortCriterion<D>>;
        dataMapping?: DataMapping<K, D, Kin, Din>;
        attributes?: Array<string | FetchAttribute>;
        filterCriterion?: AttributeFilter<D> | CompoundFilter<D> | FilterOperator<D>;
    });
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(params?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown';
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = ListDataProviderView;
