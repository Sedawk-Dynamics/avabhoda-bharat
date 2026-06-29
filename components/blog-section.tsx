'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    title: 'Understanding POSH Compliance: A Complete Guide for Employers',
    excerpt:
      'Learn about the Prevention of Sexual Harassment Act and how it applies to your organization. Essential reading for HR professionals and business owners.',
    category: 'POSH Compliance',
    date: 'January 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
  },
  {
    title: 'POCSO Act Explained: What Parents and Teachers Need to Know',
    excerpt:
      'A comprehensive overview of the Protection of Children from Sexual Offences Act and practical steps for creating safe environments for children.',
    category: 'Child Protection',
    date: 'January 10, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
  },
  {
    title: 'Building an Effective Internal Committee: Best Practices',
    excerpt:
      'Key strategies for constituting and managing an Internal Committee that handles workplace harassment complaints with sensitivity and efficiency.',
    category: 'Training',
    date: 'January 5, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
  },
  {
    title: 'ESG and Social Compliance: Why It Matters for Your Business',
    excerpt:
      'Explore the intersection of workplace safety, social compliance, and ESG goals. How POSH compliance contributes to your ESG strategy.',
    category: 'ESG',
    date: 'December 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    title: 'Bilingual Training: Making Compliance Accessible to All',
    excerpt:
      'Why language accessibility matters in workplace training and how bilingual programs can reach every employee effectively.',
    category: 'Training',
    date: 'December 20, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
  },
  {
    title: 'Annual Compliance Checklist: POSH Requirements for 2025',
    excerpt:
      'Stay on top of your POSH obligations with this comprehensive checklist covering policy updates, training, and reporting requirements.',
    category: 'Compliance',
    date: 'December 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Resources & Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Expert insights, guides, and updates on POSH, POCSO, and workplace
            compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-accent"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/resources">
            <Button size="lg" variant="outline" className="border-2">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
