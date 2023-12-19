'use strict'
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const RoleShop = {
    "SHOP":"SHOP",
    WRITER: "WRITER",
    EDITOR: "EDITOR",
    ADMIN: "ADMIN",
}

class AccessService {
    static signUp = async ({name, email,password}) => {
        try {
            //step1: check email exist
            const holdelShop = await shopModel.findOne({email}).lean() //=> lean tra ve 1 obj js thuan
            if(holdelShop) {
                return {
                    code: "xxx",
                    message: "Shop already exist"
                }
            }
            const passwordHash = await bcrypt.hash(password,10)
            const newShop = await shopModel.create({
                name,email,password:passwordHash,roles:[RoleShop.SHOP]
            })

            if(newShop) {
                //created privateKey, publicKey
                const {privateKey,publicKey}  =crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log({privateKey,publicKey});// save collection key store

                return {token :{privateKey,publicKey}}
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService