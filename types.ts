export interface ProductCardProps {
    imageSrc: string;
    title: string;
    department: string;
    originalPrice: string;
    salePrice: string;
    colors: string[];
  }
  
  export interface CategoryCardProps {
    imageSrc: string;
    title: string;
    itemCount: number;
  }
  
  export interface BrandLogoProps {
    imageSrc: string;
    width: string;
    aspectRatio: string;
  }