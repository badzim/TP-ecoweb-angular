/**
 * Service pour générer des styles inline - MAUVAISE PRATIQUE RWEB 0042
 * Externaliser les CSS et JavaScript est une bonne pratique
 * Ici, on embède intentionnellement tous les styles en inline
 */

export function generateInlineStyles(): string {
  return `
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
      .header { background-color: #333; color: white; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; }
      .nav { background-color: #444; padding: 10px; display: flex; gap: 20px; }
      .nav a { color: white; text-decoration: none; padding: 10px 15px; }
      .nav a:hover { background-color: #555; }
      .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
      .sidebar { float: left; width: 250px; padding-right: 20px; }
      .main-content { margin-left: 270px; }
      .card { border: 1px solid #ddd; border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      .card-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
      .card-body { font-size: 14px; line-height: 1.6; }
      .button { display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; cursor: pointer; }
      .button:hover { background-color: #0056b3; }
      .footer { background-color: #333; color: white; padding: 20px; text-align: center; clear: both; margin-top: 40px; }
      .alert { padding: 15px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; }
      .alert-success { background-color: #d4edda; color: #155724; border-color: #c3e6cb; }
      .alert-danger { background-color: #f8d7da; color: #721c24; border-color: #f5c6cb; }
      .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
      .table th { background-color: #f8f9fa; padding: 10px; border: 1px solid #ddd; text-align: left; }
      .table td { padding: 10px; border: 1px solid #ddd; }
      .table tr:nth-child(even) { background-color: #f9f9f9; }
      .form-group { margin-bottom: 20px; }
      .form-label { display: block; margin-bottom: 5px; font-weight: bold; }
      .form-control { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; }
      .form-control:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25); }
    </style>
  `;
}
