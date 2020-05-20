import DealType from '../utils/DealType';
import UrgencyType from '../utils/UrgencyType';

export default class Api {

    generateId = () => {
        return Math.floor(Math.random() * 1000000);
    }

    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; 

    users = [
            {
                id : 1,
                name : "user admin",
                email : "admin@admin.com",
                login : "admin",
                password : "admin",
                location : {
                    lat : -30.0691919,
                    lng : -51.1689972,
                    address : "",
                    city : "",
                    state : "",
                    zip_code :  123456
                }
            }        
        ];   

    deals = [
        {
            id: 1,
            type: DealType.Venda,
            value: 123.123,
            description: "description 1",
            trade_for: "",
            location : {
                lat : 123.456,
                lng : 456.123,
                address : "",
                city : "floripa",
                state : "santa catarina",
                zip_code :  123456
            },
            urgency: {
                type: UrgencyType.Baixa,
                limit_date: ""
            },
            photos: [
                {
                    src: ""
                }
            ]
        },
        {
            id: 2,
            type: DealType.Troca,
            value: 123.123,
            description: "description 2",
            trade_for: "",
            location : {
                lat : 123.456,
                lng : 456.123,
                address : "",
                city : "poa",
                state : "",
                zip_code :  123456
            },
            urgency: {
                type: UrgencyType.Baixa,
                limit_date: ""
            },
            photos: [
                {
                    src: ""
                }
            ]
        },
        {
            id:3,
            type: DealType.Desejo,
            value: 123.123,
            description: "",
            trade_for: "",
            location : {
                lat : 123.456,
                lng : 456.123,
                address : "",
                city : "",
                state : "",
                zip_code :  123456
            },
            urgency: {
                type: UrgencyType.Baixa,
                limit_date: ""
            },
            photos: [
                {
                    src: ""
                }
            ]
        }
    ];

    authenticate = (payload) =>  
        {
            return {
                data: {
                    token: this.token,
                    user:  this.users.find((user) => {
                        return user.email === payload.email && user.password === payload.password;  
                      })
                }
            }
        }

    authenticateSSO = (payload) =>  
        {
            return {
                data: {
                    token: this.token,
                    user:  this.users.find((user) => {
                        return user.email === payload.email && user.password === payload.password;  
                      })
                }
            }
        }
    
    getUserById = (userId, token) => 
       {
           return this.users.find((user) => {
             return user.id === userId;  
           })
       }

    createUser = (payload, token) => 
        {
            const newUser = {
                id : this.generateId(),
                payload
            };

            this.users.push(newUser);
            return payload;
        }

    updateUser = (payload, userId, token) => 
        {
            this.users.slice((user) => {
                return user.id === userId
            });
            this.createUser(payload);
            return payload;
        }

    dealSearch = (payload, token) => 
        {
            return this.deals;
        }
}