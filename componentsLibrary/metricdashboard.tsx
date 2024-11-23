
"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function Component() {
  // Create motion values for each metric
  const transactions = useMotionValue(0)
  const paymentVolume = useMotionValue(0)
  const countries = useMotionValue(0)
  const grossIncome = useMotionValue(0)
  const customerIncrease = useMotionValue(0)
  const grossMargin = useMotionValue(0)
  const activeAccounts = useMotionValue(0)
  const countryCount = useMotionValue(0)
  const enterprises = useMotionValue(0)

  // Transform motion values to formatted strings
  const transactionsDisplay = useTransform(transactions, latest => `${Math.round(latest)}M`)
  const paymentVolumeDisplay = useTransform(paymentVolume, latest => `$${latest.toFixed(2)}B`)
  const countriesDisplay = useTransform(countries, latest => Math.round(latest))
  const grossIncomeDisplay = useTransform(grossIncome, latest => `$${Math.round(latest)}M`)
  const customerIncreaseDisplay = useTransform(customerIncrease, latest => `+${Math.round(latest)}%`)
  const grossMarginDisplay = useTransform(grossMargin, latest => `$${latest.toFixed(1)}B`)
  const activeAccountsDisplay = useTransform(activeAccounts, latest => `${Math.round(latest)}K`)
  const countryCountDisplay = useTransform(countryCount, latest => Math.round(latest))
  const enterprisesDisplay = useTransform(enterprises, latest => Math.round(latest))

  useEffect(() => {
    // Animate all metrics
    const animations = [
      animate(transactions, 167, { duration: 2 }),
      animate(paymentVolume, 1.25, { duration: 2 }),
      animate(countries, 119, { duration: 2 }),
      animate(grossIncome, 912, { duration: 2 }),
      animate(customerIncrease, 68, { duration: 2 }),
      animate(grossMargin, 2.9, { duration: 2 }),
      animate(activeAccounts, 945, { duration: 2 }),
      animate(countryCount, 24, { duration: 2 }),
      animate(enterprises, 490, { duration: 2 }),
    ]

    // Cleanup animations
    return () => animations.forEach(animation => animation.stop())
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{transactionsDisplay}</motion.div>
            <div className="text-sm text-gray-400">Transactions</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{paymentVolumeDisplay}</motion.div>
            <div className="text-sm text-gray-400">Total Payment Volume</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{countriesDisplay}</motion.div>
            <div className="text-sm text-gray-400">Countries and territories</div>
          </div>
          
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{grossIncomeDisplay}</motion.div>
            <div className="text-sm text-gray-400">Gross Income</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{customerIncreaseDisplay}</motion.div>
            <div className="text-sm text-gray-400">Increase in customer purchases</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{grossMarginDisplay}</motion.div>
            <div className="text-sm text-gray-400">Gross Margin Value</div>
          </div>
          
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{activeAccountsDisplay}</motion.div>
            <div className="text-sm text-gray-400">Active Accounts</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{countryCountDisplay}</motion.div>
            <div className="text-sm text-gray-400">Countries</div>
          </div>
          <div className="space-y-2">
            <motion.div className="text-4xl font-bold">{enterprisesDisplay}</motion.div>
            <div className="text-sm text-gray-400">Marketplace enterprises</div>
          </div>
        </div>
      </div>
    </div>
  )
}