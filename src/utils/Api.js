import axios from 'axios';

export default class Api {
    apiRoot = 'http://api.vibbraneo.com';

    authenticate = (payload) => 
        axios.post(
            `${this.apiRoot}/authenticate`, 
            payload,
            {
                headers: {
                }
            }
        ).then(response => response.data);

    authenticateSSO = (payload) => 
        axios.post(
            `${this.apiRoot}/authenticate/sso`, 
            payload,
            {
                headers: {
                }
            }
        ).then(response => response.data);

    getUserById = (userId, token) => 
        axios.get(
            `${this.apiRoot}/user/${userId}`, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createUser = (payload, token) => 
        axios.post(
            `${this.apiRoot}/user`, 
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    updateUser = (payload, userId, token) => 
        axios.put(
            `${this.apiRoot}/user/${userId}`, 
            payload, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getDealByid = (dealId, token) => 
        axios.get(
            `${this.apiRoot}/deal/search/${dealId}`,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    dealSearch = (payload, token) => 
        axios.post(
            `${this.apiRoot}/deal/search`, 
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createDeal = (payload, token) => 
        axios.get(
            `${this.apiRoot}/deal`, 
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    updateDeal = (payload, dealId, token) => 
        axios.put(
            `${this.apiRoot}/deal/${dealId}`, 
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getBidInDeal = (dealId, bidId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/bid/${bidId}`, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getBidsInDeal = (dealId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/bid`, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createBid = (payload, dealId, token) => 
        axios.post(
            `${this.apiRoot}/deal/${dealId}/bid`,
            payload, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);
    
    updateBid = (payload, dealId, bidId, token) => 
        axios.put(
            `${this.apiRoot}/deal/${dealId}/bid/${bidId}`,
            payload, 
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getMessageInDeal = (dealId, messageId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/message/${messageId}`,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getMessagesInDeal = (dealId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/message`,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createMessage = (payload, dealId, token) => 
        axios.post(
            `${this.apiRoot}/deal/${dealId}/message`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    updateMessage = (payload, dealId, messageId, token) => 
        axios.put(
            `${this.apiRoot}/deal/${dealId}/message/${messageId}`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getDeliveryById = (dealId, deliveryId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/delivery/${deliveryId}`,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createDelivery = (payload, dealId, token) => 
        axios.post(
            `${this.apiRoot}/deal/${dealId}/delivery`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    updateDelivery = (payload, dealId, deliveryId, token) => 
        axios.put(
            `${this.apiRoot}/deal/${dealId}/message/${deliveryId}`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    getInviteById = (dealId, inviteId, token) => 
        axios.get(
            `${this.apiRoot}/deal/${dealId}/invite/${inviteId}`,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    createInvite = (payload, dealId, token) => 
        axios.post(
            `${this.apiRoot}/deal/${dealId}/invite`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);

    updateInvite = (payload, dealId, inviteId, token) => 
        axios.put(
            `${this.apiRoot}/deal/${dealId}/invite/${inviteId}`,
            payload,
            {
                headers: {
                    "authorization": token
                }
            }
        ).then(response => response.data);







}