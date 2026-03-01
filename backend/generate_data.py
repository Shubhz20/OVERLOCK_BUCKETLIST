import pandas as pd
import numpy as np
from datetime import datetime, timedelta

def create_example_csv(filename="example_data.csv", days=180, skus=3):
    start_date = datetime.now() - timedelta(days=days)
    dates = [start_date + timedelta(days=i) for i in range(days)]
    
    sku_list = [f"SKU-{1001+i}" for i in range(skus)]
    
    data = []
    
    for sku in sku_list:
        base_demand = np.random.randint(50, 150)
        trend = np.linspace(0, 50, days)
        seasonality = 30 * np.sin(np.linspace(0, 10 * np.pi, days))
        noise = np.random.normal(0, 10, days)
        
        sales = base_demand + trend + seasonality + noise
        sales = np.maximum(0, sales).astype(int)
        
        # Simulate current stock
        current_stock = int(np.random.randint(200, 1500))
        
        for date, sale in zip(dates, sales):
            data.append([date.strftime("%Y-%m-%d"), sku, sale, current_stock])
            
    df = pd.DataFrame(data, columns=["Date", "SKU", "Sales_Quantity", "Current_Stock"])
    df.to_csv(filename, index=False)
    print(f"Generated {filename}")

if __name__ == "__main__":
    create_example_csv()
