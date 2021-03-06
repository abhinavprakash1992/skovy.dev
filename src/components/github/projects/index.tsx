import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { rhythm } from "../../../utils/typography";
import { GitHubRepository } from "../repository";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { colors } from "../../../config/colors";

const Container = styled.div`
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: 1fr;
  }
`;

const AllProjects = styled.a`
  display: block;
  margin-top: ${rhythm(1)};
  color: ${colors.text};
  text-decoration: none;
`;

export class GitHubProjects extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Container id="projects-and-packages">
            <ContentContainer>
              <SectionHeading>Projects & Packages</SectionHeading>
              <Grid>
                {data.github.viewer.pinnedItems.nodes.map(
                  (repository, index) => (
                    <GitHubRepository
                      repository={repository}
                      key={repository.id}
                      index={index}
                    />
                  )
                )}
              </Grid>
              <AllProjects
                href="https://github.com/skovy"
                target="_blank"
                rel="noopener"
              >
                See all projects <FontAwesomeIcon icon={faArrowRight} />
              </AllProjects>
            </ContentContainer>
          </Container>
        )}
      />
    );
  }
}

const query = graphql`
  query {
    github {
      viewer {
        pinnedItems(types: REPOSITORY, first: 6) {
          nodes {
            ... on GitHub_Repository {
              id
              name
              description
              homepageUrl
              forkCount
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
