  

// Chart configuration options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0,0,0,0.1)'
      }
    },
    x: {
      grid: {
        color: 'rgba(0,0,0,0.1)'
      }
    }
  }
};

// Monthly Revenue Trend Chart
const revenueChart = new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue ($)',
      data: [45000, 52000, 48000, 58000, 65000, 72000, 68000, 75000, 82000, 78000, 85000, 92000],
      borderColor: '#667eea',
      backgroundColor: 'rgba(102,126,234,0.1)',
      tension: 0.4,
      fill: true,
      borderWidth: 3,
      pointBackgroundColor: '#667eea',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6
    }]
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Monthly Revenue Performance',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});

 
const userChart = new Chart(document.getElementById('userChart'), {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [{
      label: 'New Users',
      data: [1200, 1900, 1500, 2100, 1800, 2300],
      backgroundColor: 'rgba(118,75,162,0.8)',
      borderColor: '#764ba2',
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false
    }]
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Weekly User Acquisition',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});
 
const trafficChart = new Chart(document.getElementById('trafficChart'), {
  type: 'doughnut',
  data: {
    labels: ['Organic Search', 'Direct Traffic', 'Social Media', 'Referrals', 'Email Marketing', 'Paid Ads'],
    datasets: [{
      data: [35, 25, 15, 12, 8, 5],
      backgroundColor: [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#f5576c',
        '#4facfe',
        '#43e97b'
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Traffic Source Distribution',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});

// Device Breakdown Pie Chart
const deviceChart = new Chart(document.getElementById('deviceChart'), {
  type: 'pie',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      data: [45, 40, 15],
      backgroundColor: ['#667eea', '#764ba2', '#f093fb'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Device Usage Breakdown',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});

// Sales Performance Chart
const salesChart = new Chart(document.getElementById('salesChart'), {
  type: 'bar',
  data: {
    labels: ['Investment Plans', 'Insurance', 'Loans', 'Credit Cards', 'Savings Accounts'],
    datasets: [{
      label: 'Sales ($)',
      data: [125000, 89000, 156000, 67000, 98000],
      backgroundColor: [
        'rgba(255,99,132,0.8)',
        'rgba(54,162,235,0.8)',
        'rgba(255,205,86,0.8)',
        'rgba(75,192,192,0.8)',
        'rgba(153,102,255,0.8)'
      ],
      borderColor: [
        'rgb(255,99,132)',
        'rgb(54,162,235)',
        'rgb(255,205,86)',
        'rgb(75,192,192)',
        'rgb(153,102,255)'
      ],
      borderWidth: 2,
      borderRadius: 8
    }]
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Product Sales Performance',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});

// Growth Metrics Chart
const growthChart = new Chart(document.getElementById('growthChart'), {
  type: 'line',
  data: {
    labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'],
    datasets: [
      {
        label: 'Revenue Growth (%)',
        data: [15, 25, 20, 30, 35],
        borderColor: '#ff6b6b',
        backgroundColor: 'rgba(255,107,107,0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: '#ff6b6b',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      },
      {
        label: 'User Growth (%)',
        data: [10, 18, 15, 22, 28],
        borderColor: '#4ecdc4',
        backgroundColor: 'rgba(78,205,196,0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: '#4ecdc4',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }
    ]
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Quarterly Growth Metrics',
        font: { size: 16, weight: 'bold' }
      }
    }
  }
});

// Customer Satisfaction Chart (Additional)
const satisfactionChart = new Chart(document.getElementById('satisfactionChart'), {
  type: 'radar',
  data: {
    labels: ['Service Quality', 'Response Time', 'Product Value', 'User Experience', 'Support', 'Innovation'],
    datasets: [{
      label: 'Customer Satisfaction',
      data: [85, 78, 92, 88, 83, 79],
      borderColor: '#667eea',
      backgroundColor: 'rgba(102,126,234,0.2)',
      borderWidth: 2,
      pointBackgroundColor: '#667eea',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Customer Satisfaction Metrics',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});

// Utility Functions
function refreshData() {
  // Update all charts with new random data
  const charts = [revenueChart, userChart, salesChart, growthChart];
  
  charts.forEach(chart => {
    chart.data.datasets.forEach(dataset => {
      dataset.data = dataset.data.map(() => Math.floor(Math.random() * 100000) + 10000);
    });
    chart.update('active');
  });

  // Update stats
  document.getElementById('totalUsers').textContent = (Math.floor(Math.random() * 50000) + 20000).toLocaleString();
  document.getElementById('revenue').textContent = '$' + (Math.floor(Math.random() * 300000) + 100000).toLocaleString();
  document.getElementById('conversions').textContent = (Math.random() * 15 + 10).toFixed(1) + '%';
  document.getElementById('avgSession').textContent = Math.floor(Math.random() * 300 + 180) + 's';

  // Show refresh animation
  const refreshBtn = document.querySelector('.btn');
  refreshBtn.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    refreshBtn.style.transform = 'rotate(0deg)';
  }, 500);
}

function exportData() {
  // Create CSV data
  const csvData = [
    ['Metric', 'Value'],
    ['Total Users', document.getElementById('totalUsers').textContent],
    ['Revenue', document.getElementById('revenue').textContent],
    ['Conversion Rate', document.getElementById('conversions').textContent],
    ['Average Session', document.getElementById('avgSession').textContent]
  ];

  // Convert to CSV format
  const csvContent = csvData.map(row => row.join(',')).join('\n');
  
  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'finance_analytics_' + new Date().toISOString().split('T')[0] + '.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

function updateDateFilter() {
  const dateFilter = document.getElementById('dateFilter');
  const selectedDays = parseInt(dateFilter.value);
  
  // Update charts based on selected date range
  // This is a simplified version - in a real app, you'd fetch new data from your API
  refreshData();
  
  // Show notification
  const notification = document.createElement('div');
  notification.textContent = `Data updated for last ${selectedDays} days`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Event Listeners
document.getElementById('dateFilter').addEventListener('change', updateDateFilter);

// Auto-refresh data every 5 minutes
setInterval(refreshData, 300000);

// Animation on page load
window.addEventListener('load', () => {
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    }, index * 100);
  });
});