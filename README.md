# Serverless AWS for Beginners: random-quote-generator

This repository contains code samples and resources for the article [A Beginner's Guide to Serverless on AWS: Build Your First Lambda App in Minutes](https://medium.com/@Daradev/a-beginners-guide-to-serverless-on-aws-build-your-first-lambda-app-in-minutes-c3db955c7b1e).

## 🚀 What's Inside

This repo contains sample code for building your first serverless application on AWS.

## 📋 Prerequisites

To use the code in this repository, you'll need:

- An [AWS account](https://aws.amazon.com/)
- [AWS CLI](https://aws.amazon.com/cli/) installed and configured
- [Node.js](https://nodejs.org/) (v14 or later)
- Basic understanding of JavaScript/Python (depending on which examples you use)

## 🛠️ Getting Started

### Random Quote Generator API

This is the simplest example from the article, showing a basic Lambda function exposed via API Gateway:

## 📚 Additional Resources

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)

## 🙋‍♂️ Common Questions

### Cold Starts

Lambda functions that haven't been used recently take longer to start up. This "cold start" can add latency to your application. For critical applications, consider using provisioned concurrency.

### Lambda Timeouts

By default, Lambda functions timeout after 3 seconds. Adjust this setting based on your function's needs (up to 15 minutes).

### IAM Permissions

Most Lambda issues stem from incorrect permissions. Always check your IAM roles if functions can't access other AWS services.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

- Medium: [@Daradev](https://medium.com/@Daradev)
- LinkedIn: [Olorundara Komolafe](https://linkedin.com/in/olorundara-komolafe)
- Twitter: [@badguydev_](https://twitter.com/badguydev_)

---

🌟 If you found this repository helpful, please consider giving it a star!

