### Flatlist props

1. data: type array :  items to render
2. ListEmptyComponent: type component, element : Rendered when the list is empty(when data have 0 elements)
3. ListFooterComponent: type component, element : Rendered at the bottom of all the items
4. ListFooterComponentStyle: type viewstyle
5. ListHeaderComponent: type component, element : Rendered at the top of all the items
6. ListHeaderComponentStyle: type viewstyle
7. extraData: type any : used to force a re-render of the FlatList component when the specified data changes.
   It helps in cases where the FlatList does not automatically update when the underlying data changes.
8. keyExtractor tells the list to use the ids for the react keys instead of the default key property.
9. initialNumToRender: How many items to render in the initial batch.
10. onRefresh: type function : standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
 
