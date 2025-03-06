import Stripe from 'stripe';

export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createEscrow(project: Project) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: project.brief.budget * 100, // Stripe uses cents
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        projectId: project.id,
        customerId: project.customerId,
        influencerId: project.influencerId
      }
    });

    return paymentIntent;
  }

  async releasePayment(projectId: string) {
    // Release funds to influencer after project completion
    const project = await Project.findById(projectId);
    
    if (project.status !== 'completed') {
      throw new Error('Project must be completed before releasing payment');
    }

    const transfer = await this.stripe.transfers.create({
      amount: calculateInfluencerShare(project.payment.amount),
      currency: 'usd',
      destination: project.influencer.stripeAccountId,
    });

    return transfer;
  }
} 