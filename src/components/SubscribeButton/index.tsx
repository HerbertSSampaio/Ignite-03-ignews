import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { redirect } from 'next/dist/next-server/server/api-utils';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton ({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();


    async function handleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        } else {
            try{
                const response = await api.post('/subscribe')

                const { sessionId } = response.data;

                const stripe = await getStripeJs();

                await stripe.redirectToCheckout({ sessionId: sessionId });
            } catch (err) {
                alert(err.message);
            }
        }
    }
    
    return (
        <button 
        type="button" 
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}