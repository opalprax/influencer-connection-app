import React, { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Select,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import { SearchFilters } from '../types/influencer';

interface InfluencerSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  isLoading?: boolean;
}

const categories = [
  { name: 'Fashion', color: 'pink.400' },
  { name: 'Tech', color: 'blue.400' },
  { name: 'Lifestyle', color: 'purple.400' },
  { name: 'Food', color: 'orange.400' },
  { name: 'Travel', color: 'teal.400' },
  { name: 'Fitness', color: 'green.400' },
  { name: 'Beauty', color: 'red.400' },
  { name: 'Gaming', color: 'cyan.400' },
  { name: 'Finance', color: 'yellow.400' },
  { name: 'Crypto', color: 'gray.400' },
];

function InfluencerSearch({ onSearch, isLoading = false }: InfluencerSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [platform, setPlatform] = useState('all');
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [engagementRange, setEngagementRange] = useState([0, 100]);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, {
      category: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
      platform: platform !== 'all' ? platform : undefined,
      minFollowers: followerRange[0],
      minEngagement: engagementRange[0],
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      mb={8}
      p={6}
      bg={bgColor}
      borderRadius="xl"
      boxShadow="xl"
      border="1px"
      borderColor={borderColor}
    >
      <VStack spacing={6} align="stretch">
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search for amazing influencers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fontSize="lg"
            _focus={{
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
            }}
          />
        </InputGroup>

        <Box>
          <Text mb={2} fontWeight="medium">Categories</Text>
          <Wrap spacing={2}>
            {categories.map(({ name, color }) => (
              <WrapItem key={name}>
                <Tag
                  size="lg"
                  variant={selectedCategories.includes(name) ? 'solid' : 'subtle'}
                  colorScheme={color.split('.')[0]}
                  cursor="pointer"
                  onClick={() => toggleCategory(name)}
                >
                  <TagLabel>{name}</TagLabel>
                  {selectedCategories.includes(name) && (
                    <TagCloseButton onClick={(e) => {
                      e.stopPropagation();
                      toggleCategory(name);
                    }} />
                  )}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <Box flex={1}>
          <Text mb={2} fontWeight="medium">Platform</Text>
          <Select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            size="lg"
          >
            <option value="all">All Platforms</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
            <option value="twitter">Twitter</option>
          </Select>
        </Box>

        <Box flex={1}>
          <Text mb={2} fontWeight="medium">Followers Range</Text>
          <RangeSlider
            defaultValue={[0, 1000000]}
            min={0}
            max={1000000}
            step={10000}
            onChange={setFollowerRange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text fontSize="sm" color="gray.500">
            {followerRange[0].toLocaleString()} - {followerRange[1].toLocaleString()} followers
          </Text>
        </Box>

        <Box flex={1}>
          <Text mb={2} fontWeight="medium">Engagement Rate (%)</Text>
          <RangeSlider
            defaultValue={[0, 100]}
            min={0}
            max={100}
            step={1}
            onChange={setEngagementRange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text fontSize="sm" color="gray.500">
            {engagementRange[0]}% - {engagementRange[1]}%
          </Text>
        </Box>

        <Button
          type="submit"
          colorScheme="brand"
          size="lg"
          leftIcon={<StarIcon />}
          isLoading={isLoading}
          loadingText="Searching..."
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        >
          Find Influencers
        </Button>
      </VStack>
    </Box>
  );
}

export default InfluencerSearch; 