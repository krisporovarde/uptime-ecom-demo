const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'EUR',
  });
  
  export default function formatMoney(cents: number) {
	const euros = cents / 100;
	return formatter.format(euros);
  }