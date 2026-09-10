/**
 * Utility to export collected email leads
 *
 * Usage in browser console:
 * - exportLeadsToCSV() - Download leads as CSV
 * - exportLeadsToJSON() - Download leads as JSON
 * - getLeadsCount() - Get total number of leads
 * - clearLeads() - Clear all leads (use with caution!)
 */

// Export leads as CSV
export const exportLeadsToCSV = () => {
  const leads = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');

  if (leads.length === 0) {
    console.log('No leads to export');
    return;
  }

  // Create CSV header
  const header = 'Email,Plan,Timestamp,Source\n';

  // Create CSV rows
  const rows = leads.map(lead => {
    return `${lead.email},${lead.plan},${lead.timestamp},${lead.source}`;
  }).join('\n');

  const csv = header + rows;

  // Download CSV
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `streamholland-leads-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  console.log(`Exported ${leads.length} leads to CSV`);
};

// Export leads as JSON
export const exportLeadsToJSON = () => {
  const leads = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');

  if (leads.length === 0) {
    console.log('No leads to export');
    return;
  }

  const json = JSON.stringify(leads, null, 2);

  // Download JSON
  const blob = new Blob([json], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `streamholland-leads-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  console.log(`Exported ${leads.length} leads to JSON`);
};

// Get leads count
export const getLeadsCount = () => {
  const leads = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');
  console.log(`Total leads: ${leads.length}`);
  return leads.length;
};

// View all leads
export const viewLeads = () => {
  const leads = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');
  console.table(leads);
  return leads;
};

// Clear all leads (use with caution!)
export const clearLeads = () => {
  if (confirm('Are you sure you want to clear all leads? This cannot be undone!')) {
    localStorage.removeItem('streamholland_leads');
    console.log('All leads cleared');
  }
};

// Make functions available globally in browser console
if (typeof window !== 'undefined') {
  window.exportLeadsToCSV = exportLeadsToCSV;
  window.exportLeadsToJSON = exportLeadsToJSON;
  window.getLeadsCount = getLeadsCount;
  window.viewLeads = viewLeads;
  window.clearLeads = clearLeads;
}
