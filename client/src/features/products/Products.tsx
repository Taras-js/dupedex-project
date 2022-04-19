import styles from "./Products.module.css";
import { useState } from "react";

function Products() {
  const product = [
    {
      _id: { $oid: "624ea268497fd119e6ebf8b0" },
      id: 1,
      brand_name: "Tatcha",
      prod_name: "The Rice Wash",
      prod_link:
        "https://www.meccabeauty.co.nz/tatcha/the-rice-wash/V-853792.html?cgpath=skincare",
      price: "$56.00",
      category: "HomeSkin CareCleanser & TonerCleanserThe Rice Wash",
      img_link:
        "https://www.meccabeauty.co.nz/on/demandware.static/-/Sites-mecca-online-catalog/default/dw8e1fb81b/product/tatcha/hr/i-043839-the-rice-wash-1-940.jpg",
      Benefits:
        "Cruelty-freeHydratingBrighteningExfoliatingFirmingPore minimisingOil freeSulphate-free",
      Details:
        "The MECCA View:Harnessing the centuries-old Japanese practice of using rice as an essential ingredient in daily diet and beauty rituals (resulting in clear, bright and dewy skin), this pillow-soft cream cleanser helps to soften, smooth and hydrate the face while clearing away impurities. Like many of Tatcha's bestsellers, the cream cleanser is formulated with Hadasei-3, a fermented antioxidant-rich essence of Japanese superfoods, which floods the skin with moisture, replenishing the skin barrier for a softer, smoother complexion.Key ingredients:Japanese algae and hyaluronic acid blend: helps restore a healthy, protective skin barrier to retain essential moisture.Rice powder: revives the complexion for a natural glow.Hadasei-3: a twice-fermented blend of akita rice, kyoto green tea and okinawa algae to flood skin with moisture and reveal youthful, healthy-looking skin.Made without:Parabens, synthetic fragrances, mineral oil, sulfates, phthalates, urea, DEA and TEA.Pair it with:Tatcha The Dewy Skin CreamTatcha Luminous Dewy Skin MistTatcha The Essence",
      Usage:
        "Begin with wet hands and wet face. Squeeze a small amount into palms and rub together to create a creamy foam.  Gently massage the face avoiding the eye area and rinse thoroughly. Can be used daily.",
      Ingredients:
        "Aqua/Water/Eau, Microcrystalline Cellulose,\nPropanediol, Sodium Cocoyl Glutamate, Glycerin, Acrylates Copolymer, Sodium\nCaproyl Methyltaurate, Coco-Betaine, Parfum/Fragrance, Saccharomyces/Camellia\nSinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Oryza Sativa\n(Rice) Powder, Chondrus Crispus Extract, Sodium Hyaluronate, Betaphycus\nGelatinum Extract, Lauryl Glucoside, Potassium Hydroxide, Polyquaternium-39,\nDisodium Edta, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate,\nSodium Carbonate, Alcohol*Hadasei-3",
    },
    {
      _id: { $oid: "624ea268497fd119e6ebf8b0" },
      id: 2,
      brand_name: "Tatcha",
      prod_name: "The Rice Wash",
      prod_link:
        "https://www.meccabeauty.co.nz/tatcha/the-rice-wash/V-853792.html?cgpath=skincare",
      price: "$56.00",
      category: "HomeSkin CareCleanser & TonerCleanserThe Rice Wash",
      img_link:
        "https://www.meccabeauty.co.nz/on/demandware.static/-/Sites-mecca-online-catalog/default/dw8e1fb81b/product/tatcha/hr/i-043839-the-rice-wash-1-940.jpg",
      Benefits:
        "Cruelty-freeHydratingBrighteningExfoliatingFirmingPore minimisingOil freeSulphate-free",
      Details:
        "The MECCA View:Harnessing the centuries-old Japanese practice of using rice as an essential ingredient in daily diet and beauty rituals (resulting in clear, bright and dewy skin), this pillow-soft cream cleanser helps to soften, smooth and hydrate the face while clearing away impurities. Like many of Tatcha's bestsellers, the cream cleanser is formulated with Hadasei-3, a fermented antioxidant-rich essence of Japanese superfoods, which floods the skin with moisture, replenishing the skin barrier for a softer, smoother complexion.Key ingredients:Japanese algae and hyaluronic acid blend: helps restore a healthy, protective skin barrier to retain essential moisture.Rice powder: revives the complexion for a natural glow.Hadasei-3: a twice-fermented blend of akita rice, kyoto green tea and okinawa algae to flood skin with moisture and reveal youthful, healthy-looking skin.Made without:Parabens, synthetic fragrances, mineral oil, sulfates, phthalates, urea, DEA and TEA.Pair it with:Tatcha The Dewy Skin CreamTatcha Luminous Dewy Skin MistTatcha The Essence",
      Usage:
        "Begin with wet hands and wet face. Squeeze a small amount into palms and rub together to create a creamy foam.  Gently massage the face avoiding the eye area and rinse thoroughly. Can be used daily.",
      Ingredients:
        "Aqua/Water/Eau, Microcrystalline Cellulose,\nPropanediol, Sodium Cocoyl Glutamate, Glycerin, Acrylates Copolymer, Sodium\nCaproyl Methyltaurate, Coco-Betaine, Parfum/Fragrance, Saccharomyces/Camellia\nSinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Oryza Sativa\n(Rice) Powder, Chondrus Crispus Extract, Sodium Hyaluronate, Betaphycus\nGelatinum Extract, Lauryl Glucoside, Potassium Hydroxide, Polyquaternium-39,\nDisodium Edta, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate,\nSodium Carbonate, Alcohol*Hadasei-3",
    },
    {
      _id: { $oid: "624ea268497fd119e6ebf8b0" },
      id: 3,
      brand_name: "Tatcha",
      prod_name: "The Rice Wash",
      prod_link:
        "https://www.meccabeauty.co.nz/tatcha/the-rice-wash/V-853792.html?cgpath=skincare",
      price: "$56.00",
      category: "HomeSkin CareCleanser & TonerCleanserThe Rice Wash",
      img_link:
        "https://www.meccabeauty.co.nz/on/demandware.static/-/Sites-mecca-online-catalog/default/dw8e1fb81b/product/tatcha/hr/i-043839-the-rice-wash-1-940.jpg",
      Benefits:
        "Cruelty-freeHydratingBrighteningExfoliatingFirmingPore minimisingOil freeSulphate-free",
      Details:
        "The MECCA View:Harnessing the centuries-old Japanese practice of using rice as an essential ingredient in daily diet and beauty rituals (resulting in clear, bright and dewy skin), this pillow-soft cream cleanser helps to soften, smooth and hydrate the face while clearing away impurities. Like many of Tatcha's bestsellers, the cream cleanser is formulated with Hadasei-3, a fermented antioxidant-rich essence of Japanese superfoods, which floods the skin with moisture, replenishing the skin barrier for a softer, smoother complexion.Key ingredients:Japanese algae and hyaluronic acid blend: helps restore a healthy, protective skin barrier to retain essential moisture.Rice powder: revives the complexion for a natural glow.Hadasei-3: a twice-fermented blend of akita rice, kyoto green tea and okinawa algae to flood skin with moisture and reveal youthful, healthy-looking skin.Made without:Parabens, synthetic fragrances, mineral oil, sulfates, phthalates, urea, DEA and TEA.Pair it with:Tatcha The Dewy Skin CreamTatcha Luminous Dewy Skin MistTatcha The Essence",
      Usage:
        "Begin with wet hands and wet face. Squeeze a small amount into palms and rub together to create a creamy foam.  Gently massage the face avoiding the eye area and rinse thoroughly. Can be used daily.",
      Ingredients:
        "Aqua/Water/Eau, Microcrystalline Cellulose,\nPropanediol, Sodium Cocoyl Glutamate, Glycerin, Acrylates Copolymer, Sodium\nCaproyl Methyltaurate, Coco-Betaine, Parfum/Fragrance, Saccharomyces/Camellia\nSinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Oryza Sativa\n(Rice) Powder, Chondrus Crispus Extract, Sodium Hyaluronate, Betaphycus\nGelatinum Extract, Lauryl Glucoside, Potassium Hydroxide, Polyquaternium-39,\nDisodium Edta, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate,\nSodium Carbonate, Alcohol*Hadasei-3",
    },
    {
      _id: { $oid: "624ea268497fd119e6ebf8b0" },
      id: 4,
      brand_name: "Tatcha",
      prod_name: "The Rice Wash",
      prod_link:
        "https://www.meccabeauty.co.nz/tatcha/the-rice-wash/V-853792.html?cgpath=skincare",
      price: "$56.00",
      category: "HomeSkin CareCleanser & TonerCleanserThe Rice Wash",
      img_link:
        "https://www.meccabeauty.co.nz/on/demandware.static/-/Sites-mecca-online-catalog/default/dw8e1fb81b/product/tatcha/hr/i-043839-the-rice-wash-1-940.jpg",
      Benefits:
        "Cruelty-freeHydratingBrighteningExfoliatingFirmingPore minimisingOil freeSulphate-free",
      Details:
        "The MECCA View:Harnessing the centuries-old Japanese practice of using rice as an essential ingredient in daily diet and beauty rituals (resulting in clear, bright and dewy skin), this pillow-soft cream cleanser helps to soften, smooth and hydrate the face while clearing away impurities. Like many of Tatcha's bestsellers, the cream cleanser is formulated with Hadasei-3, a fermented antioxidant-rich essence of Japanese superfoods, which floods the skin with moisture, replenishing the skin barrier for a softer, smoother complexion.Key ingredients:Japanese algae and hyaluronic acid blend: helps restore a healthy, protective skin barrier to retain essential moisture.Rice powder: revives the complexion for a natural glow.Hadasei-3: a twice-fermented blend of akita rice, kyoto green tea and okinawa algae to flood skin with moisture and reveal youthful, healthy-looking skin.Made without:Parabens, synthetic fragrances, mineral oil, sulfates, phthalates, urea, DEA and TEA.Pair it with:Tatcha The Dewy Skin CreamTatcha Luminous Dewy Skin MistTatcha The Essence",
      Usage:
        "Begin with wet hands and wet face. Squeeze a small amount into palms and rub together to create a creamy foam.  Gently massage the face avoiding the eye area and rinse thoroughly. Can be used daily.",
      Ingredients:
        "Aqua/Water/Eau, Microcrystalline Cellulose,\nPropanediol, Sodium Cocoyl Glutamate, Glycerin, Acrylates Copolymer, Sodium\nCaproyl Methyltaurate, Coco-Betaine, Parfum/Fragrance, Saccharomyces/Camellia\nSinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Oryza Sativa\n(Rice) Powder, Chondrus Crispus Extract, Sodium Hyaluronate, Betaphycus\nGelatinum Extract, Lauryl Glucoside, Potassium Hydroxide, Polyquaternium-39,\nDisodium Edta, Phenoxyethanol, Ethylhexylglycerin, Sodium Benzoate,\nSodium Carbonate, Alcohol*Hadasei-3",
    },
  ];

  return (
    <div className={styles.products}>
        {product.map(item => {
            return (
                <>
                    <div key={item.id} className={styles.products_item}>
                      <a href={item.prod_link}><img className={styles.img_link} src={item.img_link} alt={item.prod_link} /></a>
                      <div> {item.brand_name}</div>
                      <div> {item.prod_name}</div>
                    </div>
                </>


            )

        })

        }


    </div>
  );
}

export default Products;