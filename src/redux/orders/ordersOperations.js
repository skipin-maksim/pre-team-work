// import axios from 'axios';
// import moment from 'moment';

// import routes from '../../routes';

// const baseUrl = 'https://smagserver.herokuapp.com';
// const dateNow = moment().format('DD-MM-YYYY hh:mm');

// const getAllOrders = () => async dispatch => {
//   dispatch(ordersActions.getAllOrdersRequest());

//   try {
//     const { data } = await axios(`${baseUrl}/orders`);

//     dispatch(ordersActions.getAllOrdersSuccess(data.orders));
//   } catch (error) {
//     dispatch(ordersActions.getAllOrdersError(error));
//   }
// };

// const getPriceByArt = (vendorCode, id) => async dispatch => {
//   dispatch(ordersActions.getPriceByArtRequest());

//   try {
//     const { data } = await axios(`${baseUrl}/products/${vendorCode}`);

//     dispatch(ordersActions.getPriceByArtSuccess(data.product));
//     dispatch(ordersActions.calculateSum({ id }));
//     dispatch(ordersActions.calculateAveragePrice());
//   } catch (error) {
//     if (error.message === 'Request failed with status code 404') {
//       console.log(`Артикул ${vendorCode} не найден!`);
//       alert(`Артикул ${vendorCode} не найден!`);
//       return;
//     }
//     console.log(error);
//     dispatch(ordersActions.getPriceByArtError(error));
//   }
// };

// const postOrder = (currentOrder, clientInfo, numOrder) => async dispatch => {
//   dispatch(ordersActions.saveOrderRequest());

//   const newClientInfo = {
//     ...clientInfo,
//     debt: clientInfo.debt - currentOrder.calculatedTotals.remainderPaid,
//   };

//   const postData = {
//     ...currentOrder,
//     isSaved: true,
//     isEdit: true,
//     clientInfo: newClientInfo,
//     numOrder: numOrder.valueStr,
//     id: numOrder.valueStr,
//     date: dateNow,
//   };

//   const createTabForNewOrder = tabsActions.addTab({
//     name: `Заказ №${numOrder.valueStr}`,
//     path: `${routes.OrdersPage}/${numOrder.valueStr}`,
//   });

//   try {
//     const { data: dataOrder } = await axios.post(`${baseUrl}/orders`, postData);

//     const data = dataOrder.order;

//     dispatch(ordersActions.saveOrderSuccess({ data, createTabForNewOrder }));

//     axios.patch(`${baseUrl}/numorder/5fde67cfb0a5f803a8e092ae`, numOrder);

//     axios.patch(`${baseUrl}/clients/${clientInfo._id}`, newClientInfo);
//   } catch (error) {
//     dispatch(ordersActions.saveOrderError());
//     console.error(error);
//   }
// };

// const patchOrder = (currentOrder, clientInfo, numOrder) => async dispatch => {
//   dispatch(ordersActions.patchOrderRequest());

//   // const newClientInfo = {
//   //   ...clientInfo,
//   //   debt: clientInfo.debt + currentOrder.calculatedTotals.remainderPaid,
//   // };

//   // const postData = {
//   //   ...currentOrder,
//   //   isSaved: true,
//   //   isEdit: true,
//   //   clientInfo: newClientInfo,
//   //   date: dateNow,
//   // };

//   // const createTabForNewOrder = tabsActions.addTab({
//   //   name: `Заказ №${numOrder.valueStr}`,
//   //   path: `${routes.OrdersPage}/${numOrder.valueStr}`,
//   // });

//   try {
//     const { data: serverOrderData } = await axios(
//       `${baseUrl}/orders/${currentOrder.numOrder}`,
//     );

//     const resetDebtWithoutCurrentOrderRemainderPaid =
//       clientInfo.debt + serverOrderData.order.calculatedTotals.remainderPaid;

//     const newClientInfo = {
//       ...clientInfo,
//       debt:
//         resetDebtWithoutCurrentOrderRemainderPaid -
//         currentOrder.calculatedTotals.remainderPaid,
//     };

//     const postData = {
//       ...currentOrder,
//       isSaved: true,
//       isEdit: true,
//       clientInfo: newClientInfo,
//       date: dateNow,
//     };

//     const { data } = await axios.patch(
//       `${baseUrl}/orders/${currentOrder._id}`,
//       postData,
//     );

//     console.log(data);

//     // const { data: dataOrder } = await axios.post(`${baseUrl}/orders`, postData);

//     // const data = dataOrder.order;

//     dispatch(ordersActions.patchOrderSuccess(data.order));

//     // axios.patch(`${baseUrl}/numorder/5fde67cfb0a5f803a8e092ae`, numOrder);

//     axios.patch(`${baseUrl}/clients/${clientInfo._id}`, newClientInfo);
//   } catch (error) {
//     dispatch(ordersActions.patchOrderError());
//     console.error(error);
//   }
// };

// const getOrderById = id => async dispatch => {
//   dispatch(ordersActions.getOrderByIdRequest());

//   console.log(id);

//   try {
//     const { data } = await axios(`${baseUrl}/orders/${id}`);
//     const { data: dataContact } = await axios(
//       `${baseUrl}/clients/${data.order.clientInfo._id}`,
//     );

//     dispatch(
//       ordersActions.getOrderByIdSuccess({
//         ...data.order,
//         clientInfo: dataContact.client,
//       }),
//     );
//   } catch (error) {
//     dispatch(ordersActions.getOrderByIdError());
//     console.error(error);
//   }
// };

// export default {
//   getAllOrders,
//   getPriceByArt,
//   postOrder,
//   patchOrder,
//   getOrderById,
// };
