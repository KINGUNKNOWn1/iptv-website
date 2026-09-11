// Vercel Serverless Function - Save Lead (Email Collection)
import { Redis } from '@upstash/redis';

// Initialize Redis (uses UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN env vars)
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  // GET - Retrieve all leads
  if (req.method === 'GET') {
    try {
      // Get all lead IDs
      const leadIds = await redis.lrange('leads:list', 0, -1);

      if (!leadIds || leadIds.length === 0) {
        return res.status(200).json({ leads: [], total: 0 });
      }

      // Fetch all leads
      const leads = await Promise.all(
        leadIds.map(id => redis.hgetall(`lead:${id}`))
      );

      return res.status(200).json({
        leads: leads.filter(Boolean),
        total: leads.length
      });
    } catch (error) {
      console.error('Get leads error:', error);
      return res.status(500).json({ error: 'Failed to fetch leads' });
    }
  }

  // POST - Save new lead
  if (req.method === 'POST') {
    try {
      const { email, plan, source, visitorId } = req.body;

      if (!email || !plan) {
        return res.status(400).json({ error: 'Email and plan are required' });
      }

      // Generate unique ID
      const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
      const userAgent = req.headers['user-agent'];

      const leadData = {
        id: leadId,
        email,
        plan,
        source: source || 'pricing_page',
        visitorId: visitorId || null,
        userAgent: userAgent || null,
        ipAddress: ip,
        createdAt: new Date().toISOString()
      };

      // Save lead data
      await redis.hset(`lead:${leadId}`, leadData);

      // Add to leads list
      await redis.lpush('leads:list', leadId);

      return res.status(200).json({
        success: true,
        leadId
      });
    } catch (error) {
      console.error('Lead save error:', error);
      return res.status(500).json({ error: 'Failed to save lead' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
