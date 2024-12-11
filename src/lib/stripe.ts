import Stripe from "stripe";

if(!process.env.STRIPE_SECRET_KEY){
    throw new Error("A variável não está definida no ambiente")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-11-20.acacia",
    appInfo: {
        name: "Palmeiras Shop"
    }
})